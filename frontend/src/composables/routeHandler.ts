import {useRouter} from "vue-router";




function useRouteHandler() {

    const router = useRouter();

    function getRouteParam(param: string): string {
        return router.currentRoute.value.params[param] as string;
    }

    return {
        getRouteParam
    }
}

export default useRouteHandler;