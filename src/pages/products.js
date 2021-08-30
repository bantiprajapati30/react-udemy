import {Link} from 'react-router-dom';
const Welcome=()=> {
return <div>
    <section>
    <h2>this is products page</h2>
    <ul>
        <li><Link to="/products/p1">A Book</Link></li>
        <li><Link to="/products/p2">A Car</Link></li>
        <li><Link to="/products/p3">A Bike</Link></li>
    </ul>
    </section>
</div>
}
export default Welcome;