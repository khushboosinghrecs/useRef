import { useRef } from "react";

export default PlayVedio=()=>{
    const listRef= useRef(null);

    function scrollToIndex(index) {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll('li > img')[index];
        imgNode.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });

        console.log(listRef.current)

    }
return(
    <div>
    <nav>
        <button onClick={() => scrollToIndex(0)}>
            a
            </button>
            <button onClick={() => scrollToIndex(0)}>
                b
                </button>
                <button onClick={() => scrollToIndex(0)}>
                    c
                    </button>

        </nav>

        <ul ref={listRef}>
          <li>
            <img
              src="https://placekitten.com/g/200/200"
              alt="Tom"
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/300/200"
              alt="Maru"
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/250/200"
              alt="Jellylorum"
            />
          </li>
        </ul>

</div>

)
}