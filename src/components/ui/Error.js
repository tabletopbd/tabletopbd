export default function Error({ message }) {
    return (
        <div className="row">
            <div className="col-md-10 offset-1">
                <span className="text-muted text-danger">{message}</span>
            </div>
        </div>
    );
}
