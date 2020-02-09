Create table walks (
  id SERIAL,
  name varchar (32),
  surname varchar (32),
  country varchar (32),
  city varchar (64),
  postal_code varchar (32),
  region varchar (32),
  street_name varchar (64),
  stree_number varchar (16),
  local_number varchar(16),
  coordinates POINT ,
  gender VARCHAR(16),
  primary key (id)
)
