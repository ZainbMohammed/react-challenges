import logo from './logo.svg';
import './App.css';
import HeaderCompponent from './HeaderComponent'
import PostComponent from './PostComponent'
import SideMenu from './SideMenu';

function App() {
  const posts = [
    {
      id:1, 
      postName : 'أكاديمية ترميز' ,
      postBody: 'أكاديميه مخصصه لتعليم البرمجه بمختلف لغاتها و تقنياتها'
    },
    {
      id:2,
      postName : 'Hello World' ,
      postBody: 'This is the hello world article'
    },
    {
      id:3, 
      postName : 'Post 3', 
      postBody: 'This is the body of post 3'
    },
  ]

  const postsList = posts.map((post) => {
      return (<PostComponent key={post.id} postName={post.postName} postBody={post.postBody}/>)
  });

  return (
    <div className="App">
      <HeaderCompponent/>
      <div style={{display:'flex',justifyContent:'center'}}>
        {/* POST & IDE MENU CONTAINER */}
        <div style={{display:'flex',width:'60%'}}>
          {/* POST CONTAINER */}
          <div style={{width:'70%'}}>
            {postsList}
          </div>
          {/* == POST CONTAINER == */}
          {/* ========================= */}
          {/* SIDE MENU CONTAINER */}
          <div style={{width:'30%'}}>
            <SideMenu/>
          </div>
          {/* == SIDE MENU CONTAINER == */}
          </div>
          {/* == POST & IDE MENU CONTAINER == */}
        </div>
      
    </div>
  );
}

export default App;
