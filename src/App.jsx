import "./App.css";
import ListaUsuarios from "./componentes/lista-usuarios/listaUsuarios";
import coleccion from './data/cine.peliculas.json'
const App = () => {
 
  return (
    <>
      <div className="container">
        <h2 class="display-3 text-center">Listado de Películas</h2>
        <table className='table'>
          {coleccion.map((pelicula) => (
            <tr key={pelicula._id.$oid}>
              <td><i class="bi bi-film"></i>{pelicula.titulo}</td>
              <td><i class="bi bi-person-circle"></i> {pelicula.director}</td>
              <td><i class="bi bi-tv"></i>{pelicula.genero}</td>
              <td><i class="bi bi-calendar-date"></i>{pelicula.año}</td>
            </tr>
          ))}
        </table>
        <h3 class="display-3 text-center">Listado de Usuarios</h3>
        <ListaUsuarios></ListaUsuarios>
      </div>
    </>
  );
};

export default App;
