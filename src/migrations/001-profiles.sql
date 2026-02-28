create table public.profiles (
                                 id uuid not null references auth.users on delete cascade,
                                 username text,
                                 avatar_url text,
                                 created_at timestamp with time zone default timezone('utc'::text, now ()) not null,
                                 updated_at timestamp with time zone default timezone('utc'::text, now ()) not null,

                                 primary key (id)
);

alter table public.profiles enable row level security;

-- function to insert new user to public.profiles
create function public.handle_new_user()
    returns trigger
    language plpgsql
security definer set search_path = ''
as $$
begin
insert into public.profiles(id, username, avatar_url)
values(
          new.id,
          new.raw_user_meta_data ->> 'username',
          new.raw_user_meta_data ->> 'avatar_url'
      );
return new;
end;
$$;

create trigger is_auth_user_created
    after insert on auth.users
    for each row
    execute procedure public.handle_new_user();