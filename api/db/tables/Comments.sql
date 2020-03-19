Create table COMMENTS (
  id SERIAL,
  user_ID INTEGER REFERENCES users(id),
  walk_ID INTEGER REFERENCES walks(id),
  comment text,
  comment_date text,
  primary key (id)
)