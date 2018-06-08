
function whatAdds(arr, num)
{
	arr = arr.filter(x => x < num);
	let nums = [];
	let found = false;

	//only supposed to find 2 numbers to add
	for(let i = 0; i < arr.length - 1 && !found; ++i)
	{
		for(let x = i + 1; x < arr.length && !found; ++x)
		{
			if(arr[i] + arr[x] === num)
			{
				nums = [arr[i],arr[x]];
				found = true;
			}
		}
	}

	return nums;
}

console.log(whatAdds([1,2,3], 4));
console.log(whatAdds([1,6,4,3], 7));
console.log(whatAdds([9,4,3,2], 13));


//assuming it'll be a string, since I can't find a way to check after it's a # (ie: a = 0x23 outputs 35)
//doesn't include bonus
//formats are #FFFFFF or rbg(255,0,0)
function hexRgb(val)
{
	val = val.replace(' ', '');//makes it easier
	let ret = "";

	if(val[0] === '#')
	{
		val = val.replace('#', '');
		
		const nums = [];
		for(let i = 0; i < 3; ++i)//kinda stupid but works
		{
			let start = i * 2;
			nums.push(val[start] + val[start + 1]);
		}

		//https://www.w3schools.com/jsref/jsref_parseint.asp
		ret = "rgb(" + parseInt(nums[0], 16) + "," + parseInt(nums[1], 16) + "," + parseInt(nums[2], 16) + ")";
	}
	else
	{
		//extract all nums https://stackoverflow.com/a/1183906/4051272
		const numberPattern = /\d+/g;
		let nums = val.match(numberPattern);

		//num to hex https://stackoverflow.com/a/57805/4051272
		//and padding https://stackoverflow.com/a/14760377/4051272
		const formattedNums = nums.map(x => ("0" + parseInt(x).toString(16).toUpperCase()).slice(-2));

		
		ret = "#" + formattedNums[0] + formattedNums[1] + formattedNums[2];
	}

	return ret;
}

console.log(hexRgb("rgb(17,1,55)"));
console.log(hexRgb("rgb(255,1,55"));
console.log(hexRgb("#FFFFFF"));
console.log(hexRgb("#FF00FA"));