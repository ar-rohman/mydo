/* eslint-disable no-undef */
import Regex from '../../src/script/helper/regex';

test('isEmail to be truthy', () => {
    expect(Regex.isEmail('example@domain.com')).toBeTruthy();
});
test('isEmail without domain to be falsy', () => {
    expect(Regex.isEmail('example@domain')).toBeFalsy();
});
test('isEmail without @ to be falsy', () => {
    expect(Regex.isEmail('example.domain.com')).toBeFalsy();
});
test('isEmail without domain and @ to be falsy', () => {
    expect(Regex.isEmail('example')).toBeFalsy();
});
test('isEmail without name to be falsy', () => {
    expect(Regex.isEmail('@domain.com')).toBeFalsy();
});

test('isUrl to be truthy', () => {
    expect(Regex.isUrl('http://www.example.com')).toBeTruthy();
});
test('isUrl without http to be truthy', () => {
    expect(Regex.isUrl('www.example.com')).toBeTruthy();
});
test('isUrl without www to be truthy', () => {
    expect(Regex.isUrl('http://example.com')).toBeTruthy();
});
test('isUrl without http and www to be truthy', () => {
    expect(Regex.isUrl('example.com')).toBeTruthy();
});
test('isUrl without http and www to be truthy', () => {
    expect(Regex.isUrl('example.com')).toBeTruthy();
});
test('isUrl without TLD to be falsy', () => {
    expect(Regex.isUrl('example')).toBeFalsy();
});
