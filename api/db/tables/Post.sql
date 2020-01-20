Create table POST (
  id SERIAL,
  message text,
  latitude varchar(100),
  longitude varchar(100),
  user1_ID INTEGER REFERENCES user(id),
  user2_ID INTEGER REFERENCES user(id),
  date date,
)