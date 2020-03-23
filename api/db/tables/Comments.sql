Create table COMMENTS (
  id SERIAL,
  user_nickname varchar(32) REFERENCES users(nickname),
  walk_ID INTEGER REFERENCES walks(id),
  comment text,
  comment_date text,
  primary key (id)
)