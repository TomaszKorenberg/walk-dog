Create table pets (
  id SERIAL,
  dog_name varchar (64) not null,
  race varchar (64) not null,
  size varchar (16),
  age integer,
  user_ID INTEGER REFERENCES user(id),
  Primary KEY (ID)
) 