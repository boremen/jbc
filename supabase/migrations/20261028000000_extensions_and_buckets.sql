create extension if not exists pg_trgm;
create extension if not exists citext;
create extension if not exists pgmq;

select pgmq.create('build_model');

insert into storage.buckets (id, name, public)
values ('staging', 'staging', false), ('assets', 'assets', true)
on conflict (id) do nothing;
