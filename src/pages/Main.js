import Head from "../components/Header";
import Link from "../components/Link";

export function Main() {
    return (
        <>
    <Head 
        name="name"
        description = "Description"
    />
    <Link
        title="My Amazon Wishlist"
        link="https://www.amazon.com/"
    />
    <Link
        title="Tiktok"
        link="https://www.tiktok.com/"
    />
    <Link
        title="Facebook"
        link="https://www.facebook.com/"
    />
        </>
    )
}