-- ============================================
-- 1. counsels 테이블 생성
-- ============================================
create table if not exists counsels (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  student_name text not null,
  content text not null
);

-- ============================================
-- (권장) Row Level Security 설정
-- 웹페이지에서 anon key로 읽고/쓰려면 RLS 정책이 필요합니다.
-- 친구들끼리 자유롭게 쓰는 방명록 형태이므로 누구나 읽기/쓰기 가능하도록 설정합니다.
-- ============================================
alter table counsels enable row level security;

create policy "누구나 조회 가능"
  on counsels for select
  using (true);

create policy "누구나 작성 가능"
  on counsels for insert
  with check (true);

-- ============================================
-- 2. 테스트용 가짜 데이터 5건 INSERT
-- ============================================
insert into counsels (student_name, content) values
  ('김지훈', '오늘은 코딩하다가 커피를 세 잔이나 마셨다.'),
  ('이서연', '드디어 버그를 잡았다! 오늘 하루는 승리한 날.'),
  ('박민준', '점심에 먹은 돈까스가 인생 최고의 맛이었다.'),
  ('최유진', 'Supabase 처음 써보는데 생각보다 재밌다.'),
  ('정하늘', '오늘은 그냥... 그런 하루였다. 내일은 더 힘내야지.');
