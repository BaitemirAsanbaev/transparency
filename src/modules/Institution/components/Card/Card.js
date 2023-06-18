import classes from './Card.module.scss'

const Card = () => {
    return ( <div className={classes.Card}>
        <div style={{
            backgroundImage:`url("https://cdn.britannica.com/03/117103-050-F4C2FC83/view-University-of-Oxford-England-Oxfordshire.jpg")`
        }}></div>
        <div>
            <h1>Oxford University</h1>
            <div>
                <div><b>Category: </b>University</div>
                <div><b>Availibility: </b>Public</div>
            </div>
            <div>technology. If you are looking for something that can make your
interior look awesome, and at the same time give you the pleasant
warm feeling during the winter.</div>
            <div>
                <a href="https://www.ox.ac.uk/">Link</a>
            </div>
        </div>
    </div> );
}
 
export default Card;