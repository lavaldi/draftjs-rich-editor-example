import React from 'react';
import RichEditor from "./RichEditor";
import './styles.css';

const initialValue = '<ul class="md-block-unordered-list-item"><li>It\'s rare <strong>that</strong> <del>TLs</del> are <em>invited</em> to <u>participate</u> in the <code>pitch</code> review process.</li></ul>'

// const initialValue = '<ul><li>It\'s rare that TLs are <strong>invited</strong> to participate in the pitch <strong>review</strong> process.</li><img alt="" src="https://p-VVF5MJM.t2.n0.cdn.getcloudapp.com/items/2NuXk4j8/Image%202020-04-14%20at%202.39.07%20PM.png?v=1f4b0ec164546d136b3f61a1f38c9aef" /><p></p></ul>'

function App() {
  return (
    <div className="app">
      <RichEditor initialValue={initialValue} />
    </div>
  );
}

export default App;
