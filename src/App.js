import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import baseDeDatos from "./initialState.json";

function App() {
  /*  console.log(baseDeDatos); */
  return (
    <>
      <div className='App'>
        <div className='container-app-left'>
          <Navbar />
        </div>
        <div className='container-app-right'>
          <div className='header'>
            <Header />
          </div>
          <div className='container-task'>
            <div className='individual-task-container'>
              <h3>A hacer</h3>
              {baseDeDatos.map((task) => (
                <>
                  {task.status === `TODO` ? (
                    <div className='every-task-container'>
                      <h5 className='title-task'>{task.taskName}</h5>
                      <p className='description-task'>{task.description}</p>
                      {task.phase == 1 ? (
                        <>
                          <div className='phase-and-date'>
                            <p className='task-phase1'>Fase {task.phase} </p>
                            <p className='task-date'>
                              {task.startAt} - {task.endAt}
                            </p>
                          </div>
                        </>
                      ) : task.phase == 2 ? (
                        <>
                          <div className='phase-and-date'>
                            <p className='task-phase2'>Fase {task.phase} </p>
                            <p className='task-date'>
                              {task.startAt} - {task.endAt}
                            </p>
                          </div>
                        </>
                      ) : task.phase == 3 ? (
                        <>
                          <div className='phase-and-date'>
                            <p className='task-phase3'>Fase {task.phase} </p>
                            <p className='task-date'>
                              {task.startAt} - {task.endAt}
                            </p>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              ))}
            </div>
            <div className='individual-task-container'>
              <h3>En proceso</h3>
              {baseDeDatos.map((task) => (
                <>
                  {task.status === `IN_PROGRESS` ? (
                    <div className='info-league-container'>
                      <h5 className='title-task'>{task.taskName}</h5>
                      <p className='description-task'>{task.description}</p>
                      {task.phase == 1 ? (
                        <>
                          <div className='phase-and-date'>
                            <p className='task-phase1'>Fase {task.phase} </p>
                            <p className='task-date'>
                              {task.startAt} - {task.endAt}
                            </p>
                          </div>
                        </>
                      ) : task.phase == 2 ? (
                        <>
                          <div className='phase-and-date'>
                            <p className='task-phase2'>Fase {task.phase} </p>
                            <p className='task-date'>
                              {task.startAt} - {task.endAt}
                            </p>
                          </div>
                        </>
                      ) : task.phase == 3 ? (
                        <>
                          <div className='phase-and-date'>
                            <p className='task-phase3'>Fase {task.phase} </p>
                            <p className='task-date'>
                              {task.startAt} - {task.endAt}
                            </p>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              ))}
            </div>
            <div className='individual-task-container'>
              <h3>Objetivos cumplidos</h3>
              {baseDeDatos.map((task) => (
                <>
                  {task.status === `DONE` ? (
                    <div className='info-league-container'>
                      <h5 className='title-task'>{task.taskName}</h5>
                      <p className='description-task'>{task.description}</p>
                      {task.phase == 1 ? (
                        <>
                          <div className='phase-and-date'>
                            <p className='task-phase1'>Fase {task.phase} </p>
                            <p className='task-date'>
                              {task.startAt} - {task.endAt}
                            </p>
                          </div>
                        </>
                      ) : task.phase == 2 ? (
                        <>
                          <div className='phase-and-date'>
                            <p className='task-phase2'>Fase {task.phase} </p>
                            <p className='task-date'>
                              {task.startAt} - {task.endAt}
                            </p>
                          </div>
                        </>
                      ) : task.phase == 3 ? (
                        <>
                          <div className='phase-and-date'>
                            <p className='task-phase3'>Fase {task.phase} </p>
                            <p className='task-date'>
                              {task.startAt} - {task.endAt}
                            </p>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
