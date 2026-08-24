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

Log out and sign back in, then enable the extension:

```sh
gnome-extensions enable logout-in-power-menu@codegod100.github.io
```

## License

[MIT](LICENSE)
