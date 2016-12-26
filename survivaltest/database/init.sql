CREATE TABLE IF NOT EXISTS foo
(
    id    SERIAL PRIMARY KEY NOT NULL,
    bar   VARCHAR(100) NOT NULL,
    baz   INTEGER NOT NULL
);
CREATE UNIQUE INDEX foo_id ON foo (id);

INSERT INTO foo (bar, baz) VALUES ('It''s the ill funk freaker, comin out your speaker', 42);