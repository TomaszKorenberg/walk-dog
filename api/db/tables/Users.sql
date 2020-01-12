Create table users (
  id SERIAL,
  email varchar(128) unique not NULL,
  password_salt VARCHAR (16) not NULL,
  password_hash VARCHAR (128) not NULL,
  name varchar (32) not NULL,
  surname varchar (32) not NULL,
  country varchar (32) not NULL,
  city varchar (64) not NULL,
  postal_code varchar (32) not NULL,
  region varchar (32) not NULL,
  street_name varchar (64) not NULL,
  stree_number varchar (16),
  local_number varcha(16),
  coordinates POINT NOT NULL,
  gender VARCHAR(16),   
  primary key (id)
) 