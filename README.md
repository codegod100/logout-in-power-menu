# Logout in Power Menu

A GNOME Shell extension that adds **Log Out…** to the Quick Settings power
menu, between **Restart…** and **Power Off…**.

## Compatibility

- GNOME Shell 50
- GNOME Shell 51

## Install from source

```sh
git clone https://github.com/codegod100/logout-in-power-menu.git
cd logout-in-power-menu
gnome-extensions pack
# Replace the old installation if present.
gnome-extensions install --force logout-in-power-menu@codegod100.github.io.shell-extension.zip
```

GNOME Shell must start a new session before it can discover an extension
with a new UUID. If your desktop does not show a graphical **Log Out** option,
request a logout from the terminal:

```sh
gnome-session-quit --logout
```

Confirm the logout, sign back in, and then enable the extension:

```sh
gnome-extensions enable logout-in-power-menu@codegod100.github.io
```

## License

[MIT](LICENSE)
