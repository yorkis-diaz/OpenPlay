import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from '../components/greeting/greeting_container';
import LoginFormContainer from "./user_forms/login_form_container";
import { AuthRoute } from '../util/routes_api';
import SignupFormContainer from './user_forms/signup_form_container';
import ModalContainer from '../components/user_forms/modal/modal_container';
import NavBarContainer from './nav_bar/nav_bar_container';
// import ErrorItem from './user_forms/errors/error_item';


const App = () => {
    return (
      <main>
        < ModalContainer /> 
        < NavBarContainer />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aliquam unde quas pariatur odit minus possimus expedita suscipit odio neque. Iure quod vitae maiores culpa dolorem ipsum distinctio fugit quae.lo
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo deleniti assumenda praesentium accusamus delectus voluptate sapiente consectetur obcaecati sint cum, mollitia incidunt ducimus deserunt soluta voluptatibus quibusdam neque recusandae illum.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cum vel, aspernatur ipsa consequuntur quae sint maiores? Veniam, dolor aperiam. Reprehenderit laboriosam laudantium magnam quo aspernatur aliquam! A, ad obcaecati!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nam maiores aut similique, veniam, nobis odit assumenda vero itaque reprehenderit a cumque consequuntur exercitationem laborum magni impedit deserunt? Alias, incidunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sed atque non fugit? Sapiente voluptate blanditiis ea inventore nisi, numquam nam saepe. Molestiae ea fugit saepe cupiditate at, nulla eaque?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora dolor harum, esse eum nulla adipisci odit aliquid facilis incidunt quisquam magni provident deserunt eveniet ratione, quam repellat sint? Neque, officiis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis accusantium culpa ab laudantium autem harum, ea officia reiciendis numquam! Quae facere ducimus dolore inventore eum maxime distinctio voluptatibus nulla?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus dignissimos impedit iste reprehenderit eum, saepe autem quidem sit sint assumenda aspernatur delectus quisquam quod, maiores adipisci molestias corporis harum!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolorem a expedita eum laudantium numquam dolore aspernatur recusandae itaque veniam delectus consequuntur, quia optio? Maiores cupiditate eaque rem molestias adipisci!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus assumenda possimus vitae similique totam odio veritatis ipsum, velit ipsa doloremque sint id? Consequuntur deserunt laborum natus autem maiores quaerat officia!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi dicta at iste temporibus fuga! Facilis consequatur quisquam quo repudiandae aspernatur quia, minus laborum maiores possimus esse ipsa nostrum at ea.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta illo nemo, ab fuga architecto sit rerum ullam repudiandae quisquam qui magnam quaerat alias minima laudantium pariatur sequi adipisci a cum!

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aliquam unde quas pariatur odit minus possimus expedita suscipit odio neque. Iure quod vitae maiores culpa dolorem ipsum distinctio fugit quae.lo
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo deleniti assumenda praesentium accusamus delectus voluptate sapiente consectetur obcaecati sint cum, mollitia incidunt ducimus deserunt soluta voluptatibus quibusdam neque recusandae illum.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cum vel, aspernatur ipsa consequuntur quae sint maiores? Veniam, dolor aperiam. Reprehenderit laboriosam laudantium magnam quo aspernatur aliquam! A, ad obcaecati!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nam maiores aut similique, veniam, nobis odit assumenda vero itaque reprehenderit a cumque consequuntur exercitationem laborum magni impedit deserunt? Alias, incidunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sed atque non fugit? Sapiente voluptate blanditiis ea inventore nisi, numquam nam saepe. Molestiae ea fugit saepe cupiditate at, nulla eaque?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora dolor harum, esse eum nulla adipisci odit aliquid facilis incidunt quisquam magni provident deserunt eveniet ratione, quam repellat sint? Neque, officiis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis accusantium culpa ab laudantium autem harum, ea officia reiciendis numquam! Quae facere ducimus dolore inventore eum maxime distinctio voluptatibus nulla?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus dignissimos impedit iste reprehenderit eum, saepe autem quidem sit sint assumenda aspernatur delectus quisquam quod, maiores adipisci molestias corporis harum!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolorem a expedita eum laudantium numquam dolore aspernatur recusandae itaque veniam delectus consequuntur, quia optio? Maiores cupiditate eaque rem molestias adipisci!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus assumenda possimus vitae similique totam odio veritatis ipsum, velit ipsa doloremque sint id? Consequuntur deserunt laborum natus autem maiores quaerat officia!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi dicta at iste temporibus fuga! Facilis consequatur quisquam quo repudiandae aspernatur quia, minus laborum maiores possimus esse ipsa nostrum at ea.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta illo nemo, ab fuga architecto sit rerum ullam repudiandae quisquam qui magnam quaerat alias minima laudantium pariatur sequi adipisci a cum!
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aliquam unde quas pariatur odit minus possimus expedita suscipit odio neque. Iure quod vitae maiores culpa dolorem ipsum distinctio fugit quae.lo
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo deleniti assumenda praesentium accusamus delectus voluptate sapiente consectetur obcaecati sint cum, mollitia incidunt ducimus deserunt soluta voluptatibus quibusdam neque recusandae illum.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cum vel, aspernatur ipsa consequuntur quae sint maiores? Veniam, dolor aperiam. Reprehenderit laboriosam laudantium magnam quo aspernatur aliquam! A, ad obcaecati!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nam maiores aut similique, veniam, nobis odit assumenda vero itaque reprehenderit a cumque consequuntur exercitationem laborum magni impedit deserunt? Alias, incidunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sed atque non fugit? Sapiente voluptate blanditiis ea inventore nisi, numquam nam saepe. Molestiae ea fugit saepe cupiditate at, nulla eaque?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora dolor harum, esse eum nulla adipisci odit aliquid facilis incidunt quisquam magni provident deserunt eveniet ratione, quam repellat sint? Neque, officiis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis accusantium culpa ab laudantium autem harum, ea officia reiciendis numquam! Quae facere ducimus dolore inventore eum maxime distinctio voluptatibus nulla?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus dignissimos impedit iste reprehenderit eum, saepe autem quidem sit sint assumenda aspernatur delectus quisquam quod, maiores adipisci molestias corporis harum!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolorem a expedita eum laudantium numquam dolore aspernatur recusandae itaque veniam delectus consequuntur, quia optio? Maiores cupiditate eaque rem molestias adipisci!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus assumenda possimus vitae similique totam odio veritatis ipsum, velit ipsa doloremque sint id? Consequuntur deserunt laborum natus autem maiores quaerat officia!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi dicta at iste temporibus fuga! Facilis consequatur quisquam quo repudiandae aspernatur quia, minus laborum maiores possimus esse ipsa nostrum at ea.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta illo nemo, ab fuga architecto sit rerum ullam repudiandae quisquam qui magnam quaerat alias minima laudantium pariatur sequi adipisci a cum!
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aliquam unde quas pariatur odit minus possimus expedita suscipit odio neque. Iure quod vitae maiores culpa dolorem ipsum distinctio fugit quae.lo
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo deleniti assumenda praesentium accusamus delectus voluptate sapiente consectetur obcaecati sint cum, mollitia incidunt ducimus deserunt soluta voluptatibus quibusdam neque recusandae illum.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cum vel, aspernatur ipsa consequuntur quae sint maiores? Veniam, dolor aperiam. Reprehenderit laboriosam laudantium magnam quo aspernatur aliquam! A, ad obcaecati!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nam maiores aut similique, veniam, nobis odit assumenda vero itaque reprehenderit a cumque consequuntur exercitationem laborum magni impedit deserunt? Alias, incidunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sed atque non fugit? Sapiente voluptate blanditiis ea inventore nisi, numquam nam saepe. Molestiae ea fugit saepe cupiditate at, nulla eaque?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora dolor harum, esse eum nulla adipisci odit aliquid facilis incidunt quisquam magni provident deserunt eveniet ratione, quam repellat sint? Neque, officiis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis accusantium culpa ab laudantium autem harum, ea officia reiciendis numquam! Quae facere ducimus dolore inventore eum maxime distinctio voluptatibus nulla?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus dignissimos impedit iste reprehenderit eum, saepe autem quidem sit sint assumenda aspernatur delectus quisquam quod, maiores adipisci molestias corporis harum!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolorem a expedita eum laudantium numquam dolore aspernatur recusandae itaque veniam delectus consequuntur, quia optio? Maiores cupiditate eaque rem molestias adipisci!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus assumenda possimus vitae similique totam odio veritatis ipsum, velit ipsa doloremque sint id? Consequuntur deserunt laborum natus autem maiores quaerat officia!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi dicta at iste temporibus fuga! Facilis consequatur quisquam quo repudiandae aspernatur quia, minus laborum maiores possimus esse ipsa nostrum at ea.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta illo nemo, ab fuga architecto sit rerum ullam repudiandae quisquam qui magnam quaerat alias minima laudantium pariatur sequi adipisci a cum!
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aliquam unde quas pariatur odit minus possimus expedita suscipit odio neque. Iure quod vitae maiores culpa dolorem ipsum distinctio fugit quae.lo
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo deleniti assumenda praesentium accusamus delectus voluptate sapiente consectetur obcaecati sint cum, mollitia incidunt ducimus deserunt soluta voluptatibus quibusdam neque recusandae illum.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cum vel, aspernatur ipsa consequuntur quae sint maiores? Veniam, dolor aperiam. Reprehenderit laboriosam laudantium magnam quo aspernatur aliquam! A, ad obcaecati!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nam maiores aut similique, veniam, nobis odit assumenda vero itaque reprehenderit a cumque consequuntur exercitationem laborum magni impedit deserunt? Alias, incidunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sed atque non fugit? Sapiente voluptate blanditiis ea inventore nisi, numquam nam saepe. Molestiae ea fugit saepe cupiditate at, nulla eaque?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora dolor harum, esse eum nulla adipisci odit aliquid facilis incidunt quisquam magni provident deserunt eveniet ratione, quam repellat sint? Neque, officiis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis accusantium culpa ab laudantium autem harum, ea officia reiciendis numquam! Quae facere ducimus dolore inventore eum maxime distinctio voluptatibus nulla?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus dignissimos impedit iste reprehenderit eum, saepe autem quidem sit sint assumenda aspernatur delectus quisquam quod, maiores adipisci molestias corporis harum!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolorem a expedita eum laudantium numquam dolore aspernatur recusandae itaque veniam delectus consequuntur, quia optio? Maiores cupiditate eaque rem molestias adipisci!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus assumenda possimus vitae similique totam odio veritatis ipsum, velit ipsa doloremque sint id? Consequuntur deserunt laborum natus autem maiores quaerat officia!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi dicta at iste temporibus fuga! Facilis consequatur quisquam quo repudiandae aspernatur quia, minus laborum maiores possimus esse ipsa nostrum at ea.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta illo nemo, ab fuga architecto sit rerum ullam repudiandae quisquam qui magnam quaerat alias minima laudantium pariatur sequi adipisci a cum!
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aliquam unde quas pariatur odit minus possimus expedita suscipit odio neque. Iure quod vitae maiores culpa dolorem ipsum distinctio fugit quae.lo
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo deleniti assumenda praesentium accusamus delectus voluptate sapiente consectetur obcaecati sint cum, mollitia incidunt ducimus deserunt soluta voluptatibus quibusdam neque recusandae illum.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cum vel, aspernatur ipsa consequuntur quae sint maiores? Veniam, dolor aperiam. Reprehenderit laboriosam laudantium magnam quo aspernatur aliquam! A, ad obcaecati!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nam maiores aut similique, veniam, nobis odit assumenda vero itaque reprehenderit a cumque consequuntur exercitationem laborum magni impedit deserunt? Alias, incidunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sed atque non fugit? Sapiente voluptate blanditiis ea inventore nisi, numquam nam saepe. Molestiae ea fugit saepe cupiditate at, nulla eaque?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora dolor harum, esse eum nulla adipisci odit aliquid facilis incidunt quisquam magni provident deserunt eveniet ratione, quam repellat sint? Neque, officiis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis accusantium culpa ab laudantium autem harum, ea officia reiciendis numquam! Quae facere ducimus dolore inventore eum maxime distinctio voluptatibus nulla?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus dignissimos impedit iste reprehenderit eum, saepe autem quidem sit sint assumenda aspernatur delectus quisquam quod, maiores adipisci molestias corporis harum!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolorem a expedita eum laudantium numquam dolore aspernatur recusandae itaque veniam delectus consequuntur, quia optio? Maiores cupiditate eaque rem molestias adipisci!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus assumenda possimus vitae similique totam odio veritatis ipsum, velit ipsa doloremque sint id? Consequuntur deserunt laborum natus autem maiores quaerat officia!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi dicta at iste temporibus fuga! Facilis consequatur quisquam quo repudiandae aspernatur quia, minus laborum maiores possimus esse ipsa nostrum at ea.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta illo nemo, ab fuga architecto sit rerum ullam repudiandae quisquam qui magnam quaerat alias minima laudantium pariatur sequi adipisci a cum!
          
        </p>
        {/* < ErrorItem error={"I have to do this"} /> */}
        {/* <Route exact path="/" component={GreetingContainer} /> */}
        {/* < LoginFormContainer /> */}
        {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
      </main>
    );
}

export default App;