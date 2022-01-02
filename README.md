# fswiki-theme-flat-green

## What is this?

Theme for [FreeStyle Wiki](http://fswiki.osdn.jp/cgi-bin/wiki.cgi).

## Features

- flat design.
- Compatible with PCs and smartphones (responsive design).
- Only css is used in smartphone menu (not use javascript).
- Uses [Font Awesome](https://fontawesome.com/v5.15/icons?d=gallery&p=2) in icon.

## Screenshot

### PC
|<img src="https://github.com/shimamu/fswiki-theme-flat-green/blob/main/images/screenshot_pc.png" width="300px">|
|:-:|

### Smartphone(default)

|<img src="https://github.com/shimamu/fswiki-theme-flat-green/blob/main/images/screenshot_smartphone01.png" width="150px" style="border: 1px solid #333">|
|:-:|

### Smartphone(show menu)

|<img src="https://github.com/shimamu/fswiki-theme-flat-green/blob/main/images/screenshot_smartphone02.png" width="150px">|
|:-:|

## How to install

1. Put 'theme' and 'tmpl' folder in dist folder on fswiki folder.
2. Set site template 'flat-green' and theme 'flat-green' in admin menu.

(recommend setting.)
1. Comment out the style for wikipage in admin menu user css.
2. Comment out the style for calendar plugin in admin menu user css.
3. Add plugin [fswiki-theme-flat-green](https://github.com/shimamu/fswiki-plugin-shortlastmodified).
4. Write below in wikipage 'Header'.

   ```
   {{shortlastmodified}}
   {{outline}}
   ```
