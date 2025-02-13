import validate from "../";

it("should return empty array for valid grid", () => {
	const grid = [
		[
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 6, changeable: false, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: 4, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: 5, changeable: false, candidates: [] },
			{ value: 2, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: 7, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: 1, changeable: false, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 1, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: 9, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: 6, changeable: false, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 9, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 6, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: 1, changeable: false, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 2, changeable: false, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 7, changeable: false, candidates: [] },
			{ value: 4, changeable: false, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: 2, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 6, changeable: false, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
	];

	expect(validate(grid)).toEqual([]);
});

it("should find duplicates in rows", () => {
	const grid1 = [
		[
			{ value: 3, changeable: false, candidates: [] },
			{ value: 4, changeable: true, candidates: [] }, //duplicated
			{ value: 6, changeable: false, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: 4, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: 5, changeable: false, candidates: [] },
			{ value: 2, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: 7, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: 1, changeable: false, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 1, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: 9, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: 6, changeable: false, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 9, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 6, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: 1, changeable: false, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 2, changeable: false, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 7, changeable: false, candidates: [] },
			{ value: 4, changeable: false, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: 2, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 6, changeable: false, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
	];

	const grid2 = [
		[
			{ value: 3, changeable: false, candidates: [] },
			{ value: 4, changeable: true, candidates: [] }, //duplicate
			{ value: 6, changeable: false, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: 4, changeable: true, candidates: [] }, // duplicate
			{ value: 8, changeable: false, candidates: [] },
			{ value: 4, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: 5, changeable: false, candidates: [] },
			{ value: 2, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: 7, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: 1, changeable: false, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 1, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: 9, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: 6, changeable: false, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 9, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 6, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: 1, changeable: false, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 2, changeable: false, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 7, changeable: false, candidates: [] },
			{ value: 4, changeable: false, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: 2, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 6, changeable: false, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
	];

	expect(validate(grid1).sort()).toEqual(["0;1", "0;6"].sort());
	expect(validate(grid2).sort()).toEqual(["0;1", "0;4", "0;6"].sort());
});

it("should find duplicates in columns", () => {
	const grid1 = [
		[
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 6, changeable: false, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: 4, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: 5, changeable: false, candidates: [] },
			{ value: 2, changeable: false, candidates: [] },
			{ value: 4, changeable: true, candidates: [] }, // duplicate
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: 9, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: 7, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: 1, changeable: false, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 1, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: 9, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: 6, changeable: false, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 9, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 6, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: 1, changeable: false, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 2, changeable: false, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 7, changeable: false, candidates: [] },
			{ value: 4, changeable: false, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: 2, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 6, changeable: false, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
	];

	const grid2 = [
		[
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 6, changeable: false, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: 4, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: 5, changeable: false, candidates: [] },
			{ value: 2, changeable: false, candidates: [] },
			{ value: 4, changeable: true, candidates: [] }, // duplicate
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: 9, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: 7, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: 1, changeable: false, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 1, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: 9, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: 6, changeable: false, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
		],
		[
			{ value: 1, changeable: true, candidates: [] }, // duplicate
			{ value: 5, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 9, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 6, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: 1, changeable: false, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 2, changeable: false, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 7, changeable: false, candidates: [] },
			{ value: 4, changeable: false, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: 2, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 6, changeable: false, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
	];

	expect(validate(grid1).sort()).toEqual(["2;0", "4;0"].sort());
	expect(validate(grid2).sort()).toEqual(["2;0", "4;0", "5;0", "6;0"].sort());
});

it("should find duplicates in blocks", () => {
	const grid1 = [
		[
			{ value: 3, changeable: false, candidates: [] },
			{ value: 7, changeable: true, candidates: [] }, // duplicate
			{ value: 6, changeable: false, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: 4, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: 5, changeable: false, candidates: [] },
			{ value: 2, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: 7, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: 1, changeable: false, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 1, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: 9, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: 6, changeable: false, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 9, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 6, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: 1, changeable: false, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 2, changeable: false, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 7, changeable: false, candidates: [] },
			{ value: 4, changeable: false, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: 2, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 6, changeable: false, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
	];

	const grid2 = [
		[
			{ value: 3, changeable: false, candidates: [] },
			{ value: 7, changeable: true, candidates: [] }, // duplicate
			{ value: 6, changeable: false, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: 4, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: 5, changeable: false, candidates: [] },
			{ value: 2, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: true, candidates: [] }, // duplicate
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: 7, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: 1, changeable: false, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 1, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: 9, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 8, changeable: false, candidates: [] },
			{ value: 6, changeable: false, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 9, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 6, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: 1, changeable: false, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 2, changeable: false, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 7, changeable: false, candidates: [] },
			{ value: 4, changeable: false, candidates: [] },
		],
		[
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 5, changeable: false, candidates: [] },
			{ value: 2, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: 6, changeable: false, candidates: [] },
			{ value: 3, changeable: false, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
			{ value: null, changeable: true, candidates: [] },
		],
	];

	expect(validate(grid1).sort()).toEqual(["0;1", "2;2"].sort());
	expect(validate(grid2).sort()).toEqual(["0;1", "0;5", "1;4", "2;2"].sort());
});
