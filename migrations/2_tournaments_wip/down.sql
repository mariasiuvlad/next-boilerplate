
alter table "tournaments"."tournament" drop constraint "tournament_type_fkey";

alter table "tournaments"."tournament" drop constraint "tournament_status_fkey";

DROP TABLE "tournaments"."tournament_participants";
DROP TABLE "tournaments"."tournament_status_enum";
DROP TABLE "tournaments"."tournament_type_enum";
DROP TABLE "tournaments"."tournament" CASCADE;
DROP SCHEMA "tournaments";
DROP FUNCTION "public"."me";
