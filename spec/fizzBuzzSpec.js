describe("Fizzbuzz", function() {
  it("returns fizz when passed 3", function() {
    expect(fizzbuzz(3)).toEqual("fizz");
  });

  it("returns buzz when passed 5", function() {
    expect(fizzbuzz(5)).toEqual("buzz");
  });

  it("returns fizzbuzz when passed 15", function() {
    expect(fizzbuzz(15)).toEqual("fizzbuzz");
  });

  it("returns fizz when passed 6", function() {
    expect(fizzbuzz(6)).toEqual("fizz");
  });

  it("returns fizz when passed 2", function() {
    expect(fizzbuzz(2)).toEqual(2);
  });
});
