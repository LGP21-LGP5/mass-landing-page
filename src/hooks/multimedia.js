import { useStaticQuery, graphql } from 'gatsby'

export default () => {
    const { allCompanyMembersCsv } = useStaticQuery(graphql`
        query {
            allCompanyMembersCsv(filter: {Department: {eq: "Multimedia"}, Added_Role: {ne: "CMO"}}) {
                nodes {
                    Name
                }
            }
        }
    `)

    return allCompanyMembersCsv.nodes
}
