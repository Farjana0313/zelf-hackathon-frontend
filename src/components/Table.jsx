
import { Link } from 'react-router-dom';

export default function Table({ tableData }) {

  const formateDate = (date) => {
    let options = {
      month: "long",
      day: "numeric"
    };
    return new Date(date).toLocaleDateString("en-US", options);
  }


  console.log('table data', tableData);
  return (
    <div className='table-layout'>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Video</th>
            <th>Creator</th>
            <th>Platform</th>
            <th>Total views</th>
            <th>Total engagement</th>
            <th>Engagement
              rate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.data?.map((data) => (

            <tr key={data.id}>
              <td>{formateDate(data.content.timestamp)}</td>
              <td><p>{data.content.title}</p></td>
              <td>{data.creator.username}</td>
              <td>{data.content.content_platform} </td>
              {/* <td> <img src={data.thumbnail_url} alt="Thumbnail" /> </td> */}
              <td>{data.content.views}</td>
              <td>{data.content.total_engagement}</td>
              <td>{data.content.engagement_of_views}</td>
              <td><Link to="">View Post</Link></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}
