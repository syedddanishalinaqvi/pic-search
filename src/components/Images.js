

export default function Images(props) {
    return (
        <>
            <div class="card mx-2 my-2" style={{ width: '20.1rem', boxShadow: '1px 1px 1px black, 0 0 15px black, 0 0 1px black', }}>
                <img src={props.imageUrl} style={{ width: 320, height: 300, }} class="card-img-top" alt=".." />
                {/* <div class="card-body">
                    <h5 class="card-title">User: {props.user}</h5>
                </div> */}
                <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary">
                    {props.user}
                    <span class="visually-hidden">unread messages</span>
                </span>
                {/* <div class="card-body">
                    <a href={props.mainPage} class="link">Go to Main Page</a>
                </div> */}

            </div>

        </>
    )
}