Create table pets (
  id SERIAL,
  dog_name varchar (64) not null,
  race varchar (64) not null,
  size varchar (16),
  age varchar,
  user_ID INTEGER REFERENCES users(id),
  Primary KEY (ID)
) 