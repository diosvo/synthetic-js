const bookFactory = (title, author, isbn) => ({
  title,
  author,
  isbn,
});

export const book1 = bookFactory('Harry Potter', 'JK Rowling', 'AB123');
export const book2 = bookFactory(
  'The Great Gatsby',
  'F. Scott Fitzgerald',
  'CD456'
);
export const book3 = bookFactory('Moby-Dick', 'Herman Melville', 'EF789');
export const book4 = bookFactory('Harry Potter', 'JK Rowling', 'AB123');
export const book5 = bookFactory(
  'The Great Gatsby',
  'F. Scott Fitzgerald',
  'CD456'
);
