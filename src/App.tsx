import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostNewPage from './pages/PostNewPage';
import PostDetailPage from './pages/PostDetailPage';

import BookMarkPage from './pages/BookMarkPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProfilePage from './pages/MyProfilePage';
import EditProfile from './components/profilePage/EditProfile';
import HistoryPage from './pages/HistoryPage';
import PostEditPage from './pages/PostEditPage';
import SignUpPage from './pages/SignUpPage';
import NotificationPage from './pages/NotificationPage';
import LandingPage from './pages/LandingPage';
import MyPostsPage from './pages/MyPostsPage';
import ChattingList from './pages/ChattingList';
import ChattingPage from './pages/ChattingPage';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-secondary">
        <main className="flex flex-col items-center max-w-[940px] mx-auto bg-white relative">
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/post/new" element={<PostNewPage />} />
              <Route path="/post/edit/:postId" element={<PostEditPage />} />
              <Route path="/my/edit/profile" element={<EditProfile />} />

              <Route element={<Layout />}>
                <Route path="/home" element={<HomePage />} />
                <Route path="/posts/:selectedCategory" element={<PostListPage />} />
                <Route path="/post/:postId" element={<PostDetailPage />} />

                <Route path="/my/bookmark" element={<BookMarkPage />} />
                <Route path="/my/profile" element={<ProfilePage />} />
                <Route path="/chat" element={<ChattingList />} />
                <Route path="/chatting" element={<ChattingPage />} />
                <Route path="/my/history" element={<HistoryPage />} />

                <Route path="/my/posts" element={<MyPostsPage />} />
                <Route path="/notification" element={<NotificationPage />} />
              </Route>
            </Routes>
          </Router>
        </main>
      </div>
    </QueryClientProvider>
  );
}
