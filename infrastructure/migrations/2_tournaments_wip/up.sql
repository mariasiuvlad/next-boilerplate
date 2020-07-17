
CREATE SCHEMA tournaments;

CREATE TABLE tournaments.tournament (
    title text NOT NULL,
    type text NOT NULL,
    start_date date NOT NULL,
    status text NOT NULL,
    participants_limit integer,
    entry_fee double precision DEFAULT 0 NOT NULL,
    description text,
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    owner_id uuid NOT NULL
);
CREATE TABLE tournaments.tournament_status_enum (
    value text NOT NULL,
    comment text
);
CREATE TABLE tournaments.tournament_type_enum (
    value text NOT NULL,
    comment text
);

INSERT INTO tournaments.tournament_type_enum (value, comment) VALUES 
    ('elimination', 'Elimination'),
    ('group', 'Group')
;
INSERT INTO tournaments.tournament_status_enum (value, comment) VALUES 
    ('in_progress', 'In progress')
;


ALTER TABLE ONLY tournaments.tournament
    ADD CONSTRAINT tournament_pkey PRIMARY KEY (id);
ALTER TABLE ONLY tournaments.tournament_status_enum
    ADD CONSTRAINT tournament_status_enum_pkey PRIMARY KEY (value);
ALTER TABLE ONLY tournaments.tournament_type_enum
    ADD CONSTRAINT tournament_type_enum_pkey PRIMARY KEY (value);

CREATE TABLE "tournaments"."tournament_participants"("tournament_id" uuid NOT NULL, PRIMARY KEY ("tournament_id") , UNIQUE ("tournament_id"));
ALTER TABLE "tournaments"."tournament_participants" ADD COLUMN "user_id" uuid NOT NULL;

alter table "tournaments"."tournament_participants" drop constraint "tournament_participants_pkey";
alter table "tournaments"."tournament_participants"
    add constraint "tournament_participants_pkey" 
    primary key ( "tournament_id", "user_id" );

alter table "tournaments"."tournament_participants"
           add constraint "tournament_participants_tournament_id_fkey"
           foreign key ("tournament_id")
           references "tournaments"."tournament"
           ("id") on update restrict on delete restrict;

alter table "tournaments"."tournament_participants"
           add constraint "tournament_participants_user_id_fkey"
           foreign key ("user_id")
           references "public"."users"
           ("id") on update restrict on delete restrict;

alter table "tournaments"."tournament_participants" drop constraint "tournament_participants_pkey";
alter table "tournaments"."tournament_participants"
    add constraint "tournament_participants_pkey" 
    primary key ( "tournament_id", "user_id" );

ALTER TABLE "tournaments"."tournament_participants" ADD COLUMN "place" integer NULL;


alter table "tournaments"."tournament"
           add constraint "tournament_status_fkey"
           foreign key ("status")
           references "tournaments"."tournament_status_enum"
           ("value") on update restrict on delete restrict;

alter table "tournaments"."tournament"
           add constraint "tournament_type_fkey"
           foreign key ("type")
           references "tournaments"."tournament_type_enum"
           ("value") on update restrict on delete restrict;

alter table "tournaments"."tournament"
           add constraint "tournament_owner_id_fkey"
           foreign key ("owner_id")
           references "public"."users"
           ("id") on update restrict on delete restrict;

CREATE OR REPLACE FUNCTION public.me(hasura_session json)
 RETURNS SETOF users
 LANGUAGE sql
 STABLE
AS $function$
SELECT
  *
FROM
  "users"
WHERE
  id = (hasura_session ->> 'x-hasura-user-id') :: uuid $function$;

