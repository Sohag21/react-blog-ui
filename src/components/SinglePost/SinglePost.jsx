import { AiOutlineDelete } from 'react-icons/ai'
import { FaEdit } from 'react-icons/fa'
import './SinglePost.css'

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="images/post4.jpg" alt="" className="singlePostImg" />
                <h2 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <FaEdit className="edit" />
                        <AiOutlineDelete className="dlt" />
                    </div>
                </h2>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Sohag Ahmed</b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro excepturi enim natus nisi labore magnam amet ratione, beatae maxime ducimus reprehenderit quibusdam consequuntur laboriosam ipsum ut nesciunt maiores iure. Non nesciunt qui magni dolores quos. Deleniti quos quasi minus aperiam tempora illum laborum a, sit consequatur quo vero? Cum mollitia eligendi a iure laborum non deleniti, veniam libero consequatur sapiente! Quo corporis officiis expedita provident nulla, eum nemo! Eaque pariatur molestiae omnis culpa saepe, eveniet consectetur ab possimus, error numquam adipisci veniam minus esse architecto odit illo ipsa aut optio illum nemo molestias corrupti fuga. Vel, obcaecati! Obcaecati nesciunt, illo, iusto tempore ratione ducimus optio officia vero repellendus delectus illum velit natus aperiam qui, quae aliquid cum earum rem in! Quisquam quod tempora ex mollitia neque ullam repudiandae cupiditate? Doloremque nulla impedit ab deserunt, tempore animi adipisci inventore ducimus eligendi sapiente. Nobis odio cumque sunt aspernatur cum doloremque nemo ad dicta eius maxime dolores fugiat commodi veniam corrupti dolor odit soluta laborum accusamus, tempore, quisquam, officia ipsam quo accusantium. Delectus dolores debitis minima autem voluptate porro deserunt, vitae, error veritatis tenetur iure, dignissimos eos eveniet nam atque iusto facilis velit qui? Corrupti tempore modi illo eveniet, ad temporibus? Incidunt, doloribus?</p>
            </div>
        </div>
    )
}
