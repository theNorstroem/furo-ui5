# Upgrade from @furo/ui5 0.x.x

Put upgrade note in this file

- package.json dependencies...
- delete theme weg...
- furo-ui5-data => furo-ui5
- furo-ui5-display => furo-ui5-typerenderer-labeled
- ui5-shellbar-item @-click=“”
- furo-ui5-busyindicator  => furo-ui5-busy-indicator
- layout/furo-z-grid => ui5/furo-ui5-z-grid
- layout/furo-split-grid => ui5/furo-ui5-split-grid



# Offene Punkte
Alle Elemente value-state from FAT

furo-ui5-money-input

furo-ui5-notification-group-display zeigt keine Anzahl an, verschwindet nicht bei 0 elementen

furo-ui5-radio-button: Repeated bool example

furo-ui5-context-menu-display does not work propperly with scrolled content


# Missing Components / features
furo-ui5-radio-button-labeled

furo-ui5-radio-button-repeated
furo-ui5-radio-button-repeated-labeled

furo-ui5-reference-search value-state feature

feat: furo-ui5-segmented-button iconFieldPath to use icons from bindOptions

# Nice to have
furo-ui5-sign-pad: unlock, lock


# Findings
- furo-ui5-number-input kein placeholder bei readonly, required
  - das ist **kein** bug
  
Alle Elemente Summarys gemeinsam durchgehen
