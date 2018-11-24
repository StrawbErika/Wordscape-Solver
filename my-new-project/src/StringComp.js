"use strict"; //message to compiler

function stringComparison(s1, s2) {
    if (s1.length != s2.length) return true;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] != '_' && s2[i] != '_') {
            if (s1[i] > s2[i]) return true;
            else if (s1[i] < s2[i]) return true;
        }
    }
    return false;
}
export default stringComparison;