function arrayOfCopies(val, occurences)
{
	const arr = [];

	for(let i = 0; i < occurences; ++i)
	{
		arr.push(val);
	}

	return arr;
}

function countOccurences(val, arr)
{
	let count = 0;

	for(let i = 0; i < arr.length; ++i)
	{
		count += val === arr[i] ? 1 : 0;
	}

	return count;
}


function myIncludes(arr, val)
{
	let isIncluded = false;

	isIncluded = arr.includes(val);

	for(let i = 0; i < arr.length; ++i)
	{
		if(Array.isArray(arr[i]))
		{
			//don't want to change isIncluded value unless this condition is true
			isIncluded = arr[i][0] === val ? true : isIncluded;
		}
	}

	return isIncluded;
}

function cleanYourRoom(array)
{
	const clean = [];
	//sorting before so we don't have to worry about it while grouping
	array = array.sort();

	for(let i = 0; i < array.length; ++i)
	{
		if(!myIncludes(clean, array[i]))
		{
			let count = countOccurences(array[i], array);

			clean.push(arrayOfCopies(array[i], count));
		}
	}

	return clean;
}

console.log( cleanYourRoom([3,5,5,5,1,2,3,"1"]) );
console.log( cleanYourRoom([5,8,9,"6",4,3,2,4,7,"8",5,"5",4,3,4]) );
console.log( cleanYourRoom([1,"1","1","2",2,3,3,"3","3","3"]) );