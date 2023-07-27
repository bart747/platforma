// __tests__/codeHighlight.test.jsx

import Highlight from "../util/codeHighlight";
//  String formatting is really important
//  – remember about newlines, quotes, trailing spaces
const snippet = "(a) => a + 1;";
const snippetF = Highlight(snippet);
const expectation =
  "<pre><code> <span style=\"color:#808080\">(</span>a<span style=\"color:#808080\">)</span> <span class=\"text-brand-orange\">=></span> a + 1<span style=\"color:#808080\">;</span>";
test("formatted code snipped equals test sample", () => {
  expect(snippetF).toMatch(expectation);
});
