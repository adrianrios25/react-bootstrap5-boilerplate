import logo from "./logo.svg";
import "./App.scss";

function App() {
    return (
        <div className='App border'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1>React Bootstrap 5</h1>
            <div className='d-flex justify-content-center'>
                <button type='button' className='mx-1 btn btn-primary'>
                    Primary
                </button>
                <button type='button' className='mx-1 btn btn-secondary'>
                    Secondary
                </button>
                <button type='button' className='mx-1 btn btn-success'>
                    Success
                </button>
                <button type='button' className='mx-1 btn btn-danger'>
                    Danger
                </button>
                <button type='button' className='mx-1 btn btn-warning'>
                    Warning
                </button>
                <button type='button' className='mx-1 btn btn-info'>
                    Info
                </button>
                <button type='button' className='mx-1 btn btn-light'>
                    Light
                </button>
                <button type='button' className='mx-1 btn btn-dark'>
                    Dark
                </button>
                <button type='button' className='mx-1 btn btn-custom'>
                    Custom
                </button>
            </div>

            <button
                type='button'
                className='btn btn-primary my-1'
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
            >
                Launch demo modal
            </button>

            <div
                className='modal fade'
                id='exampleModal'
                tabindex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
            >
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='exampleModalLabel'>
                                Modal title
                            </h5>
                            <button
                                type='button'
                                className='btn-close'
                                data-bs-dismiss='modal'
                                aria-label='Close'
                            ></button>
                        </div>
                        <div className='modal-body'>...</div>
                        <div className='modal-footer'>
                            <button
                                type='button'
                                className='btn btn-secondary'
                                data-bs-dismiss='modal'
                            >
                                Close
                            </button>
                            <button type='button' className='btn btn-primary'>
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
