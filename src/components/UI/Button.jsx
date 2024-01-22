export default function Button({children, textOnly, className, type, onClick, ...props }) {
    let cssClasses = textOnly ? `text-button $(className)` : "button";
    cssClasses += ' ' + className; 
    return <button className={cssClasses} {...props}>{children}</button>
}