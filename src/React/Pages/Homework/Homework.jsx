import React from 'react';
import Essays from './Essays';
import styled from 'styled-components'
import Template from '../../Shared/Template'

const Homework = () => {
    // functional component logic
    return (
        <Template title='Homework' aside={false}>
            <HomeworkStyled>
                <h2>This is my Homework</h2>
                <Essays essays = {essays}/>
            </HomeworkStyled>
        </Template>
    )
}

export default Homework;


const HomeworkStyled = styled.div`
    border : dashed 5px teal;
    padding : 20px;
    background-color : #bee;
`

const essays = [
  { title: 'Q1',
    question: 'Question 1 goes here',
    AnswerComponent: () => {
        return (            
            <div>                
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro obcaecati, aperiam fugit modi perferendis sequi blanditiis dolorum repellendus quia nam doloremque sunt eos vitae placeat. Nobis nulla corporis et voluptatum?</p>   
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi officia doloremque suscipit et id. Corporis minus, nesciunt quis dolores deserunt facere accusantium natus reprehenderit culpa quisquam, vel laudantium voluptatibus quas?</p>   
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nobis vero eligendi accusamus soluta laboriosam, consequatur blanditiis deleniti tempora non labore nemo. Accusantium necessitatibus nobis porro. Dicta officia perferendis blanditiis?</p>   
            </div>
        )
    }
  },
  { title: 'Q2',
    question: 'Question 2 goes here',
    AnswerComponent: () => {
        return (            
            <div>                
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam nam libero hic. Optio perferendis facilis saepe nemo asperiores nostrum? Facilis eligendi natus dolorem illo pariatur distinctio, nemo quas deleniti?</p>   
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nostrum odio rerum, quisquam quidem ea qui earum maxime fugiat repellat iusto quibusdam culpa consequatur sunt quam iure magni, doloribus temporibus.</p>   
                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero veritatis molestiae debitis error laudantium, voluptatem nihil sunt, excepturi aut voluptate, amet doloremque quidem dicta nam deleniti facere. Totam, dolor cumque!</p>   
            </div>
        )
    },
   },
   { title: 'Q4',
   question: 'What is middleware? What does Thunk Middleware do for Redux',
   AnswerComponent: () => {
       return (            
           <div>                
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam nam libero hic. Optio perferendis facilis saepe nemo asperiores nostrum? Facilis eligendi natus dolorem illo pariatur distinctio, nemo quas deleniti?</p>   
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nostrum odio rerum, quisquam quidem ea qui earum maxime fugiat repellat iusto quibusdam culpa consequatur sunt quam iure magni, doloribus temporibus.</p>   
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero veritatis molestiae debitis error laudantium, voluptatem nihil sunt, excepturi aut voluptate, amet doloremque quidem dicta nam deleniti facere. Totam, dolor cumque!</p>   
           </div>
       )
   }
   },
   { title: 'Q6',
   question: 'What are the ingridients of a code review in Web Development?',
   AnswerComponent: () => {
       return (            
           <div>                
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam nam libero hic. Optio perferendis facilis saepe nemo asperiores nostrum? Facilis eligendi natus dolorem illo pariatur distinctio, nemo quas deleniti?</p>   
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nostrum odio rerum, quisquam quidem ea qui earum maxime fugiat repellat iusto quibusdam culpa consequatur sunt quam iure magni, doloribus temporibus.</p>   
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero veritatis molestiae debitis error laudantium, voluptatem nihil sunt, excepturi aut voluptate, amet doloremque quidem dicta nam deleniti facere. Totam, dolor cumque!</p>   
           </div>
       )
   }
   },
   { title: 'Q7',
   question: 'What is difference beetween Actions Types, Action Creators and Reducers',
   AnswerComponent: () => {
       return (            
           <div>                
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam nam libero hic. Optio perferendis facilis saepe nemo asperiores nostrum? Facilis eligendi natus dolorem illo pariatur distinctio, nemo quas deleniti?</p>   
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nostrum odio rerum, quisquam quidem ea qui earum maxime fugiat repellat iusto quibusdam culpa consequatur sunt quam iure magni, doloribus temporibus.</p>   
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero veritatis molestiae debitis error laudantium, voluptatem nihil sunt, excepturi aut voluptate, amet doloremque quidem dicta nam deleniti facere. Totam, dolor cumque!</p>   
           </div>
       )
   }
   },
   { title: 'Q8',
   question: 'What does Spread operator do. How does this help Redux reducers keep the state from mutating.',
   AnswerComponent: () => {
       return (            
           <div>                
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam nam libero hic. Optio perferendis facilis saepe nemo asperiores nostrum? Facilis eligendi natus dolorem illo pariatur distinctio, nemo quas deleniti?</p>   
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nostrum odio rerum, quisquam quidem ea qui earum maxime fugiat repellat iusto quibusdam culpa consequatur sunt quam iure magni, doloribus temporibus.</p>   
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero veritatis molestiae debitis error laudantium, voluptatem nihil sunt, excepturi aut voluptate, amet doloremque quidem dicta nam deleniti facere. Totam, dolor cumque!</p>   
           </div>
       )
   }
   },
   { title: 'Q9',
   question: 'What does Spread operator do. How does this help Redux reducers keep the state from mutating.',
   AnswerComponent: () => {
       return (            
           <div>                
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam nam libero hic. Optio perferendis facilis saepe nemo asperiores nostrum? Facilis eligendi natus dolorem illo pariatur distinctio, nemo quas deleniti?</p>   
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nostrum odio rerum, quisquam quidem ea qui earum maxime fugiat repellat iusto quibusdam culpa consequatur sunt quam iure magni, doloribus temporibus.</p>   
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero veritatis molestiae debitis error laudantium, voluptatem nihil sunt, excepturi aut voluptate, amet doloremque quidem dicta nam deleniti facere. Totam, dolor cumque!</p>   
           </div>
       )
   }
   },
   { title: 'Q10',
   question: 'Diff const, let, var',
   AnswerComponent: () => {
       return (            
           <div>                
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam nam libero hic. Optio perferendis facilis saepe nemo asperiores nostrum? Facilis eligendi natus dolorem illo pariatur distinctio, nemo quas deleniti?</p>   
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nostrum odio rerum, quisquam quidem ea qui earum maxime fugiat repellat iusto quibusdam culpa consequatur sunt quam iure magni, doloribus temporibus.</p>   
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero veritatis molestiae debitis error laudantium, voluptatem nihil sunt, excepturi aut voluptate, amet doloremque quidem dicta nam deleniti facere. Totam, dolor cumque!</p>   
           </div>
       )
   }
   },
   { title: 'Q12',
   question: 'What is a controlled input?',
   AnswerComponent: () => {
       return (            
           <div>                
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam nam libero hic. Optio perferendis facilis saepe nemo asperiores nostrum? Facilis eligendi natus dolorem illo pariatur distinctio, nemo quas deleniti?</p>   
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nostrum odio rerum, quisquam quidem ea qui earum maxime fugiat repellat iusto quibusdam culpa consequatur sunt quam iure magni, doloribus temporibus.</p>   
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero veritatis molestiae debitis error laudantium, voluptatem nihil sunt, excepturi aut voluptate, amet doloremque quidem dicta nam deleniti facere. Totam, dolor cumque!</p>   
           </div>
       )
   }
   },
   { title: 'Q13',
   question: 'Which is more important, Server-Side or Client-Side validation and why?',
   AnswerComponent: () => {
       return (            
           <div>                
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam nam libero hic. Optio perferendis facilis saepe nemo asperiores nostrum? Facilis eligendi natus dolorem illo pariatur distinctio, nemo quas deleniti?</p>   
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nostrum odio rerum, quisquam quidem ea qui earum maxime fugiat repellat iusto quibusdam culpa consequatur sunt quam iure magni, doloribus temporibus.</p>   
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero veritatis molestiae debitis error laudantium, voluptatem nihil sunt, excepturi aut voluptate, amet doloremque quidem dicta nam deleniti facere. Totam, dolor cumque!</p>   
           </div>
       )
   }
   }
];