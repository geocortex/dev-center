import React from "react";

interface MessagingTypeSummaryProps {
    items: Array<{ name: string; description: string }>;
}

export default function MessagingTypeSummary(props: MessagingTypeSummaryProps) {
    const { items } = props;
    return (
        // <table>
        //     <thead>
        //         <tr>
        //             <th>Name</th>
        //             <th>Description</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {items.map((item) => {
        //             return (
        //                 <tr key={item.name}>
        //                     <td>
        //                         <a href={`#${item.name}`}>{item.name}</a>
        //                     </td>
        //                     <td>{item.description}</td>
        //                 </tr>
        //                 // <React.Fragment key={item.name}>
        //                 //     <tr>
        //                 //         <td>Name</td>
        //                 //         <td>
        //                 //             <a href={`#${item.name}`}>{item.name}</a>
        //                 //         </td>
        //                 //     </tr>
        //                 //     <tr>
        //                 //         <td>Description</td>
        //                 //         <td>{item.description}</td>
        //                 //     </tr>
        //                 // </React.Fragment>
        //             );
        //         })}
        //     </tbody>
        // </table>
        items.map((item) => (
            <table key={item.name}>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <a href={`#${item.name}`}>{item.name}</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{item.description}</td>
                    </tr>
                </tbody>
            </table>
        ))
    );
}
