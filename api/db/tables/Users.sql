Create table users (
  id SERIAL,
  email varchar(128) unique not NULL,
  password_salt VARCHAR (128) not NULL,
  password_hash VARCHAR (128) not NULL,
  name varchar (32),
  surname varchar (32),
  nickname varchar (32) unique not NULL,
  city varchar (64),
  postal_code varchar (32),
  street_name varchar (64),
  stree_number varchar (16),
  local_number varcha(16),
  gender VARCHAR(16),
  primary key (id)
) 