import { CldUploadWidget } from 'next-cloudinary';
 
const widgetUploadImage = () => {
    return (
        <CldUploadWidget signatureEndpoint="<API Endpoint (ex: /api/sign-cloudinary-params)>">
            {({ open }) => {
                function handleOnClick(e: any) {
                e.preventDefault();
                open();
                }
                return (
                <button className="button" onClick={e => handleOnClick(e)}>
                    Upload an Image
                </button>
                );
            }}
        </CldUploadWidget>
    )
}

export default widgetUploadImage;