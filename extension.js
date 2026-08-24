import Gio from 'gi://Gio';
import GLib from 'gi://GLib';

import {Extension, gettext as _} from 'resource:///org/gnome/shell/extensions/extension.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as PopupMenu from 'resource:///org/gnome/shell/ui/popupMenu.js';

const SESSION_MANAGER_NAME = 'org.gnome.SessionManager';
const SESSION_MANAGER_PATH = '/org/gnome/SessionManager';
const SESSION_MANAGER_INTERFACE = 'org.gnome.SessionManager';
const LOGOUT_MODE_NORMAL = 0;

export default class LogoutInPowerMenuExtension extends Extension {
    enable() {
        const systemIndicator = Main.panel.statusArea.quickSettings?._system;
        this._menu = systemIndicator?._systemItem?.menu;

        if (!this._menu)
            throw new Error('Could not find the Quick Settings power menu');

        this._logoutItem = new PopupMenu.PopupMenuItem(_('Log Out…'));
        this._logoutItem.connect('activate', () => {
            Main.panel.closeQuickSettings();
            Gio.DBus.session.call(
                SESSION_MANAGER_NAME,
                SESSION_MANAGER_PATH,
                SESSION_MANAGER_INTERFACE,
                'Logout',
                new GLib.Variant('(u)', [LOGOUT_MODE_NORMAL]),
                null,
                Gio.DBusCallFlags.NONE,
                -1,
                null,
                (_connection, result) => {
                    try {
                        Gio.DBus.session.call_finish(result);
                    } catch (error) {
                        console.error(`Logout request failed: ${error.message}`);
                    }
                });
        });

        // Suspend and Restart occupy positions 0 and 1. Put Log Out next.
        this._menu.addMenuItem(this._logoutItem, 2);
    }

    disable() {
        this._logoutItem?.destroy();
        this._logoutItem = null;
        this._menu = null;
    }
}
