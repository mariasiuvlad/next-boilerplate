CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
declare
  _new record;
begin
  _new := new;
  _new. "updated_at" = now();
  return _new;
end;
$$;
CREATE TABLE public.tournament (
    title text NOT NULL,
    type text NOT NULL,
    start_date date NOT NULL,
    state text NOT NULL,
    participants_limit integer,
    entry_fee double precision DEFAULT 0 NOT NULL,
    description text,
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    owner_id uuid NOT NULL
);
CREATE TABLE public.tournament_state_enum (
    value text NOT NULL,
    comment text
);
CREATE TABLE public.tournament_type_enum (
    value text NOT NULL,
    comment text
);
CREATE TABLE public.users (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    display_name text,
    avatar_url text
);
ALTER TABLE ONLY public.tournament
    ADD CONSTRAINT tournament_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.tournament_state_enum
    ADD CONSTRAINT tournament_state_enum_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.tournament_type_enum
    ADD CONSTRAINT tournament_type_enum_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_users_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
ALTER TABLE ONLY public.tournament
    ADD CONSTRAINT tournament_state_fkey FOREIGN KEY (state) REFERENCES public.tournament_state_enum(value) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.tournament
    ADD CONSTRAINT tournament_type_fkey FOREIGN KEY (type) REFERENCES public.tournament_type_enum(value) ON UPDATE RESTRICT ON DELETE RESTRICT;

