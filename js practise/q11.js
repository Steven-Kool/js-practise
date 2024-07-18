const mergeAndFormat = (books, format) => {
  const merged = [];
  const formatted = [];

  for(const book of books) {
    let found = false;
    for(const i of merged) {
      if(book.title === i.title && book.author === i.author) {
        i.year.push(book.year);
        found = true;
      }
    }

    if(!found) {
      merged.push({title: book.title, author: book.author, year: [book.year]});
    }
  }

  if(format === "string") {
    for(const book of merged) {
      let years = "";
      for(let i = 0; i < book.year.length; i++) {
        if(i !==  0) {
          years += `, ${book.year[i]}`;
        } else {
          years += book.year[i];
        }
      }
      formatted.push(`${book.title} by ${book.author} (${years})`);
    }

    return formatted;
  }

  return merged;
}

console.log(mergeAndFormat([], "string"));
