import styles from '../styles.css';

export function links() {
  return[{ rel: "stylesheet", href: styles}];
}

export default function Index() {
  return (
    <div className="Body">
      <div className='bubble1'></div>
      <div className='Text'>
        <h1>Welcome to History Finds</h1>
        <ul className='list'>
          <li className='listItem'>
            <a
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
        </ul>
      </div>
      <div className='bubble2'></div>
    </div>
  );
}
