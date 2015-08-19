/**
 * Created by xuesongdu on 11/08/15.
 */
describe("The startsWith(string) and endsWith(string) test", function(){

    // check for empty string, empty inputs
    describe("Checks for empty string \"\"", function(){

        it("should return true when the string is empty and length is ZERO", function(){

            expect(startsWith("")).toBe(true);
            expect(endsWith("")).toBe(true);

        })

        it("should return false when the string with spaces", function(){

            expect(endsWith(" ")).toBe(false);
            expect(endsWith(" ")).toBe(false);
        })

    })

    // check for integer value
    describe("Checks for integer", function(){

        it("should return false when 42", function(){

            // arrange
            var num = 42;

            // assert
            expect(startsWith(num)).toBe(false);
            expect(endsWith(num)).toBe(false);
        })
    })

    // check for object
    describe("Checks for object ", function(){

        it("should return false when {first:\"Johnny\"}", function(){

            // arrange
            var obj = {first:"Johnny"};

            // assert
            expect(startsWith(obj)).toBe(false);
            expect(endsWith(obj)).toBe(false);
        })
    })

    // checks for prefix strings
    describe("Checks for prefix", function(){

        it("should return true when starts with..." , function(){

            // arrange
            var test1 = "hang"; //true
            var test5 = "hang the"; // true

            // assert
            expect(startsWith(test1)).toBe(true);
            expect(startsWith(test5)).toBe(true);
        })

        it("should return false when starts with..." , function(){

            // arrange
            var test2 = "Hang"; // false
            var test3 = "I've got a room for rent"; // false

            // assert
            expect(startsWith(test2)).toBe(false);
            expect(startsWith(test3)).toBe(false);
        })
    })

    // check for suffix strings
    describe("Checks for suffix ", function(){

        it("should return true when ends with...", function(){

            // arrange
            var test1 = "dj"; // true
            var test4 = "the dj"; // true

            // assert
            expect(endsWith(test1)).toBe(true);
            expect(endsWith(test4)).toBe(true);

        })

        it("should return false when ends with...", function(){

            // arrange
            var test2 = "panic on the streets"; // false

            // assert
            expect(endsWith(test2)).toBe(false);
        })
    })

    // stripHTML() test
    describe("Checks for strip HTML ", function(){

        it("should return expected string after striping", function(){

            // arrange
            var test1 = "<p>Shoplifters of the World <em>Unite</em>!</p>";
            var test2 = "1 &lt; 2";

            var expected_test1 = "Shoplifters of the World Unite!";
            var expected_test2 = "1 &lt; 2";

            // assert
            expect(strip(test1)).toBe(expected_test1);
            expect(strip(test2)).toBe(expected_test2);
        })
    })

})