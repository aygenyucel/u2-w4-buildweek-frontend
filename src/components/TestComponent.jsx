import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfileAction } from "../redux/actions";

const TestComponent = () => {
    const selector = useSelector(state => state.profile.data)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfileAction());
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    console.log(selector)

    return (
        <div>{selector.title} {selector.bio}</div>
    )
}

export default TestComponent;