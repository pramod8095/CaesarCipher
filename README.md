# React: Caesar's Cipher

Complete a partially completed React application that encrypts and decrypts a piece of text using [Caesar's Cipher](https://en.wikipedia.org/wiki/Caesar_cipher). The cipher uses an encryption algorithm where each letter is replaced with a letter by some fixed number of positions down the alphabetical series (e.g., a shift of _1_ replaces the letter _a_ with _b_, the letter _e_ with _f_, the word _hello_ with _ifmmp_, etc.).

Certain core React functionalities have already been implemented. Complete the React application as shown below in order to pass all the unit tests.

![](https://hrcdn.net/s3_pub/istreet-assets/CaEFDlS2Vzu9Q4cFIHDvEg/ezgif.com-resize.gif)

The application has the following functionalities:

*   The app has three components:
    *   The Shift component, which allows the user to enter the number of places to shift each character.
    *   The Plaintext component, which allows the user to enter plain text.
    *   The Ciphertext component, which allows the user to enter encrypted text.
*   The shift component initially shows the text 'Enter shift amount'.
*   A string is encrypted when the user does the following:
    *   Selects the number of units to shift from the dropdown.
    *   Enters the text to encrypt into the _Plaintext_ textbox.
*   A string is decrypted when the user does the following:
    *   Selects the number of units to shift from the dropdown.
    *   Enters the text to decrypt into the _Ciphertext_ textbox.
*   The following list of actions should be supported by the app:
    *   Enter the text to encrypt into the _Plaintext_ textbox, which encrypts and renders correctly in the _Ciphertext_ textbox
    *   Delete text from either textbox
    *   Enter the text to decrypt into the _Ciphertext_ textbox, which decrypts and renders correctly in the _Plaintext_ textbox
*   The cipher is case-sensitive.
*   During conversion, you may ignore numbers and special characters with the exception of spaces.

The following data-testid attributes are required in the component for the tests to pass:

*   The select field to choose the shift should have the data-testid attribute 'select'.
*   The _Plaintext_ textbox should the data-testid attribute 'plain-text'.
*   The _Ciphertext_ textbox should have the data-testid attribute 'cipher-text'.

Please note that the component has the above data-testid attributes for test cases and certain classes and ids for rendering purposes. It is advised not to change them.

Note: The functions for encrypting and decrypting the data are provided in the Ciphertext and Plaintext components respectively. Please use these functions to encrypt/decrypt the text.

## Environment 

- React Version: 16.13.1
- Node Version: 14(LTS)
- Default Port: 8000

## Project Specifications 

**Read-Only Files**
- `src/App.test.js`

**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```
